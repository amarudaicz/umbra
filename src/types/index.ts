export type Artwork = {
  id: string;
  title: string;
  imageUrl: string;
  materials: string[];
  dimensions: string;
  year: number;
  statement: string;
  slug: string;
  dataAiHint?: string;
};
