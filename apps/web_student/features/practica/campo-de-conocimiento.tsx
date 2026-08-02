"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

import estilos from "./practica.module.css";

/**
 * Fondo tridimensional: el temario del curso, hecho constelacion.
 *
 * Cada esfera es un tema y las aristas siguen el orden del temario, asi que lo
 * que se ve es el grafo que se pidio en la reunion. No es decoracion: los temas
 * superados se encienden, de modo que el fondo es el avance del alumno.
 *
 * Tres cuidados, porque esto vive detras de una pantalla que se usa en el
 * movil durante horas:
 *
 *   - Se detiene solo cuando la pestana no esta visible. Sin eso seguiria
 *     consumiendo bateria mientras el alumno hace otra cosa.
 *   - Con prefers-reduced-motion se dibuja un fotograma y se congela: se ve la
 *     constelacion, no se mueve.
 *   - La geometria es minima (12 caras por esfera) y se reutiliza entre todas.
 *     Lo caro de una escena no es el tamano, es la cantidad de objetos.
 */

interface Props {
  /** Cuantos temas tiene el curso. Define cuantos nodos hay. */
  temas: number;
  /** Cuantos lleva superados. Define cuantos brillan. */
  superados: number;
  /** Indice del tema en curso, para destacarlo. */
  actual?: number;
}

const MAX_NODOS = 60;

export function CampoDeConocimiento({ temas, superados, actual }: Props) {
  const contenedor = useRef<HTMLDivElement>(null);
  // Los valores entran por referencia para poder cambiarlos sin rehacer la
  // escena: reconstruirla en cada respuesta seria tirar y recrear decenas de
  // objetos de WebGL varias veces por minuto.
  const estado = useRef({ superados, actual });
  estado.current = { superados, actual };

  useEffect(() => {
    const nodo = contenedor.current;
    if (!nodo) return;

    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cantidad = Math.max(3, Math.min(temas, MAX_NODOS));

    const escena = new THREE.Scene();
    const camara = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camara.position.z = 26;

    let render: THREE.WebGLRenderer;
    try {
      render = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      // Sin WebGL no pasa nada: la pantalla funciona igual, solo sin fondo.
      return;
    }
    render.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    nodo.appendChild(render.domElement);

    const tinta = new THREE.Color(0x22323b);
    const vivo = new THREE.Color(0x0d7a71);
    const foco = new THREE.Color(0xf2c88e);

    /**
     * Los nodos se reparten en una espiral de Fermat sobre una esfera.
     *
     * Colocarlos al azar deja huecos y racimos; este reparto los separa de
     * forma pareja sin que se note una reticula, que es justo lo que hace que
     * se lea como constelacion y no como malla.
     */
    const posiciones: THREE.Vector3[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < cantidad; i += 1) {
      const y = 1 - (i / (cantidad - 1)) * 2;
      const radio = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = phi * i;
      posiciones.push(
        new THREE.Vector3(Math.cos(theta) * radio, y, Math.sin(theta) * radio)
          .multiplyScalar(11)
      );
    }

    const grupo = new THREE.Group();
    escena.add(grupo);

    const geometria = new THREE.IcosahedronGeometry(0.34, 0);
    const esferas: THREE.Mesh<THREE.IcosahedronGeometry, THREE.MeshBasicMaterial>[] = [];
    for (const p of posiciones) {
      const material = new THREE.MeshBasicMaterial({ color: tinta, transparent: true, opacity: 0.3 });
      const esfera = new THREE.Mesh(geometria, material);
      esfera.position.copy(p);
      grupo.add(esfera);
      esferas.push(esfera);
    }

    // Aristas siguiendo el orden del temario: tema I -> tema II -> tema III.
    const vertices: number[] = [];
    for (let i = 0; i < posiciones.length - 1; i += 1) {
      vertices.push(...posiciones[i].toArray(), ...posiciones[i + 1].toArray());
    }
    const geoLineas = new THREE.BufferGeometry();
    geoLineas.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    const lineas = new THREE.LineSegments(
      geoLineas,
      new THREE.LineBasicMaterial({ color: tinta, transparent: true, opacity: 0.14 })
    );
    grupo.add(lineas);

    function pintar() {
      const { superados: hechos, actual: enCurso } = estado.current;
      esferas.forEach((esfera, i) => {
        const esActual = enCurso !== undefined && i === enCurso;
        const hecho = i < hechos;
        esfera.material.color.copy(esActual ? foco : hecho ? vivo : tinta);
        esfera.material.opacity = esActual ? 0.95 : hecho ? 0.7 : 0.26;
        esfera.scale.setScalar(esActual ? 1.7 : hecho ? 1.15 : 1);
      });
    }

    // TypeScript pierde el estrechamiento dentro de la funcion, aunque el
    // early return de arriba ya garantiza que nodo existe.
    const lienzo = nodo;
    function medir() {
      const { width, height } = lienzo.getBoundingClientRect();
      if (!width || !height) return;
      render.setSize(width, height, false);
      camara.aspect = width / height;
      camara.updateProjectionMatrix();
    }
    medir();
    const observador = new ResizeObserver(medir);
    observador.observe(nodo);

    // El raton inclina la escena un poco. Se interpola en vez de seguir el
    // puntero al instante: atarlo directamente se siente mecanico.
    const objetivo = { x: 0, y: 0 };
    const suave = { x: 0, y: 0 };
    function alMover(e: PointerEvent) {
      objetivo.x = (e.clientY / window.innerHeight - 0.5) * 0.34;
      objetivo.y = (e.clientX / window.innerWidth - 0.5) * 0.34;
    }
    if (!reducido) window.addEventListener("pointermove", alMover, { passive: true });

    let animacion = 0;
    function cuadro() {
      suave.x += (objetivo.x - suave.x) * 0.045;
      suave.y += (objetivo.y - suave.y) * 0.045;
      grupo.rotation.x = suave.x;
      grupo.rotation.y += 0.0011 + suave.y * 0.0016;
      pintar();
      render.render(escena, camara);
      animacion = requestAnimationFrame(cuadro);
    }

    pintar();
    if (reducido) {
      render.render(escena, camara);
    } else {
      cuadro();
    }

    // Detener con la pestana oculta. La escena es barata, pero no hay motivo
    // para gastar bateria dibujando algo que nadie mira.
    function alCambiarVisibilidad() {
      if (reducido) return;
      cancelAnimationFrame(animacion);
      if (!document.hidden) cuadro();
    }
    document.addEventListener("visibilitychange", alCambiarVisibilidad);

    return () => {
      cancelAnimationFrame(animacion);
      document.removeEventListener("visibilitychange", alCambiarVisibilidad);
      window.removeEventListener("pointermove", alMover);
      observador.disconnect();
      esferas.forEach((e) => e.material.dispose());
      geometria.dispose();
      geoLineas.dispose();
      (lineas.material as THREE.Material).dispose();
      render.dispose();
      nodo.removeChild(render.domElement);
    };
  }, [temas]);

  return <div ref={contenedor} aria-hidden className={estilos.campo} />;
}
