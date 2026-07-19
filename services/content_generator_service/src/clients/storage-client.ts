// services/content_generator_service/src/clients/storage-client.ts
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export function createStorageClient(url: string, key: string): SupabaseClient {
  return createClient(url, key);
}

export class StorageClient {
  private bucketReady = false;

  constructor(
    private readonly supabase: SupabaseClient,
    private readonly bucket: string
  ) {}

  /** Crea el bucket si no existe. Se llama una vez al arrancar. */
  async ensureBucket(): Promise<void> {
    if (this.bucketReady) return;

    // Ver si ya existe
    const { data: buckets, error: listErr } = await this.supabase.storage.listBuckets();
    if (listErr) throw listErr;

    const exists = buckets?.some((b) => b.name === this.bucket);
    if (!exists) {
      const { error: createErr } = await this.supabase.storage.createBucket(
        this.bucket,
        { public: true }   // público para que las URLs sean accesibles sin token
      );
      if (createErr) throw createErr;
      console.log(`[StorageClient] Bucket "${this.bucket}" creado.`);
    }

    this.bucketReady = true;
  }

  async upload(buffer: Buffer, path: string, mimeType: string): Promise<string> {
    // Garantizar bucket antes de cada upload (idempotente tras la primera vez)
    await this.ensureBucket();

    const { error } = await this.supabase.storage
      .from(this.bucket)
      .upload(path, buffer, { contentType: mimeType, upsert: true });

    if (error) throw error;

    const { data } = this.supabase.storage.from(this.bucket).getPublicUrl(path);
    return data.publicUrl;
  }
}
