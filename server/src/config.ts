export enum Env {
  DEV = 'DEV',
  PROD = 'PROD',
}

interface Config {
  auto: string;
  database: string;
}

export const API_CONFIG: Record<Env, Config> = {
  [Env.DEV]: {
    auto: 'localhost:50051',
    database: 'mongodb://localhost:27017/',
  },
  [Env.PROD]: {
    auto: `${process.env.AUTO_SERVER_HOSTNAME}:50051`,
    database: 'mongodb://database.notangles-db:27017/',
  },
};

export const config: Config = API_CONFIG[process.env.NODE_ENV || Env.DEV];
