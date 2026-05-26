// services/content_generator_service/src/clients/storage-client.ts
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export function createStorageClient(url: string, key: string): SupabaseClient {
  return createClient(url, key);
}

export class StorageClient {
  constructor(
    private readonly supabase: SupabaseClient,
    private readonly bucket: string
  ) {}

  async upload(buffer: Buffer, path: string, mimeType: string): Promise<string> {
    const { error } = await this.supabase.storage
      .from(this.bucket)
      .upload(path, buffer, { contentType: mimeType, upsert: true });

    if (error) throw error;

    const { data } = this.supabase.storage.from(this.bucket).getPublicUrl(path);
    return data.publicUrl;
  }
}
