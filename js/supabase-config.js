/* ==========================================================================
   RK GROUPS OF CONSTRUCTION - SUPABASE CLIENT CONFIGURATION
   Central API Client, Real-time Subscriptions, & Image Storage Uploader
   ========================================================================== */

const SUPABASE_URL = 'https://dgakmkbnqxmwhognxiqt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnYWtta2JucXhtd2hvZ254aXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0MTYwNjksImV4cCI6MjEwMTk5MjA2OX0.EKbjCTZDR2tX0RcGt_oS535cE-B5byZXFVIZM-lI-lM';

// Initialize Supabase Client
if (window.supabase) {
  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  console.log('✅ Supabase Client Initialized Successfully');
} else {
  console.error('❌ Supabase JS SDK not loaded! Make sure supabase-js script tag is included before this file.');
}

/**
 * Upload Image File directly to Supabase Storage Bucket
 * @param {File} file - Browser File object
 * @param {string} bucketName - 'project-images' | 'website-images' | 'gallery-images'
 * @returns {Promise<string>} Public URL of uploaded image
 */
async function uploadImageToSupabase(file, bucketName = 'project-images') {
  if (!file) throw new Error('No file provided for upload.');
  if (!window.supabaseClient) throw new Error('Supabase client is not initialized.');

  // Validate File Type
  const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
  if (!validTypes.includes(file.type)) {
    throw new Error('Invalid image file type. Please upload JPG, PNG, WEBP, or SVG.');
  }

  // Validate File Size (Max 10MB)
  if (file.size > 10 * 1024 * 1024) {
    throw new Error('Image size exceeds 10MB limit. Please select a smaller image.');
  }

  const fileExt = file.name.split('.').pop();
  const cleanName = file.name.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30);
  const filePath = `${Date.now()}_${Math.random().toString(36).substring(2, 7)}_${cleanName}.${fileExt}`;

  // Upload to Supabase Storage
  const { data, error } = await window.supabaseClient.storage
    .from(bucketName)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: true
    });

  if (error) {
    console.error('Supabase Storage Upload Error:', error);
    throw new Error('Failed to upload image: ' + error.message);
  }

  // Get Public URL
  const { data: publicUrlData } = window.supabaseClient.storage
    .from(bucketName)
    .getPublicUrl(filePath);

  if (!publicUrlData || !publicUrlData.publicUrl) {
    throw new Error('Could not generate public URL for uploaded image.');
  }

  return publicUrlData.publicUrl;
}
