export interface BountyProgram {
  id: string;
  category: "code" | "marketing";
  title: string;
  description: string;
  reward: string;
  advice: string;
}

export const bountyPrograms: BountyProgram[] = [
  {
    id: "code-new-app",
    category: "code",
    title: "Ship a new webapp with utopian-minify",
    description:
      "Ship a webapp, use utopian-minify to create a minified build, run it in the Utopian Browser and write an article on X, Reddit, Dev.to or a blog post about the development experience.",
    reward: "1 SOL",
    advice:
      "Read the documentation for utopian-minify and make sure to test whether the app works in the Utopian Browser.",
  },
  {
    id: "code-convert-app",
    category: "code",
    title: "Convert an existing app to a mini build",
    description:
      "Convert an existing app to a mini build using utopian-minify, run it in the Utopian Browser and write an article on X, Reddit, Dev.to or a blog about the development experience.",
    reward: "1 SOL",
    advice:
      "Read the documentation for utopian-minify and make sure to test whether the app works in the Utopian Browser.",
  },
  {
    id: "marketing-article",
    category: "marketing",
    title: "Write about smaller websites",
    description:
      "Write an article about the implications of making websites 80-90% smaller and publish it on X, Reddit, Dev.to or a blog.",
    reward: "0.5 SOL",
    advice:
      "Read the utopian.build website and research the impact on the capacity of public networks or hotspots, low-bandwidth environments, data plans and economies in general.",
  },
];
