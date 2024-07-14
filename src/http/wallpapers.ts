import { drive, auth } from "@/lib/googleDrive";

export async function listWallpapers(folderId: string){
    return drive.files.list({
        auth,
        q: `'${folderId}' in parents and trashed = false`,
        fields: `files(id, name, mimeType, thumbnailLink, hasThumbnail, iconLink, webContentLink, contentHints, createdTime, size, thumbnailVersion, shared, imageMediaMetadata)`,
    })
}