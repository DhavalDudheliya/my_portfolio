import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <div className="bg-muted relative aspect-video w-full overflow-hidden rounded-xl border shadow-sm">
      <Image src={src} alt={alt} fill className="object-contain" priority />
    </div>
  );
}
