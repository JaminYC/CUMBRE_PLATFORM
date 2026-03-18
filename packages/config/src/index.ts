export interface ServiceEndpoints {
  authServiceUrl: string;
  learningServiceUrl: string;
  contentServiceUrl: string;
}

export const defaultEndpoints: ServiceEndpoints = {
  authServiceUrl: "http://localhost:3001",
  learningServiceUrl: "http://localhost:3002",
  contentServiceUrl: "http://localhost:3003"
};
