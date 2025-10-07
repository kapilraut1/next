import { getModels } from "@/models";

type Model = {
  id: string | number;
  name: string;
  description: string;
  likes: number;
  category: string;
};

export default async function Page() {
  const models: Model[] = await getModels();
  return models.map((model: Model) => <p key={model.id}>{model.name}</p>);
}
