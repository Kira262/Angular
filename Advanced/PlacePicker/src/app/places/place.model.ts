export interface Place {
  name: any;
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  lat: number;
  lon: number;
  justAdded?: boolean; // Add optional justAdded property
}
