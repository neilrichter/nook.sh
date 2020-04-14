export interface Query<T> {
  data: T
}

export interface UserPinnedRepositoriesQuery {
  user: GithubUser;
}

export interface GithubUser {
  pinnedItems: Repositories;
}

export interface Repositories {
  nodes: Repository[];
}

export interface Languages {
  totalSize: number;
  edges: {
    size: number;
    node: Language
  }[];
}

export interface Language {
  color: string;
  name: string;
}

export interface Repository {
  name: string;
  url: string;
  description: string;
  stargazers: {
    totalCount: number;
  };
  primaryLanguage: Language;

}
