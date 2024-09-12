export type Category{
  name:string;
}

type News = {
  id: String;
  title: String;
  category: {
    name: String;
  };
  publiishedAt: String;
  createdAt: String;
};

