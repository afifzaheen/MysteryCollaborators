# Adding Custom Videos to SOLARA

This folder is for storing your custom videos that will be used in the SOLARA luxury tech website.

## How to Add Your Own Videos

1. Place your video files in this directory (client/public/videos/)
2. Update the video configuration in `client/src/config/video-config.ts` to point to your video files

Example configuration:

```typescript
export const videoConfig = {
  showcaseVideo: {
    // Change this path to your video file
    src: "/videos/your-product-video.mp4",
    title: "Your Custom Title",
    description: "Your custom description"
  },
  // Additional videos can be configured here
}
```

## Video Format Recommendations

For optimal performance and compatibility:

- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 (16:9 ratio)
- Duration: Keep showcase videos under 60 seconds for best user experience
- File size: Optimize your videos to be under 10MB when possible

## Adding Videos to the Showcase Section

The video showcase component is designed to highlight your luxury products. Consider including:

- Product demonstrations
- Lifestyle usage footage
- Premium unboxing experiences
- Design and manufacturing process

When creating videos, maintain the luxury aesthetic with:
- Clean, minimalist shots
- Elegant transitions
- Gold/dark color schemes
- Professional lighting
- High-quality sound