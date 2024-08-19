export type Environment =
  | EnvironmentLocal
  | EnvironmentMock
  | EnvironmentProduction
  | EnvironmentDev;

export type EnvironmentLocal = EnvironmentBase & {
  envName: 'local';
};
export type EnvironmentMock = EnvironmentBase & {
  envName: 'mock';
};
export type EnvironmentDev = EnvironmentBase & {
  envName: 'dev';
};
export type EnvironmentProduction = EnvironmentBase & {
  envName: 'production';
};

interface EnvironmentBase {
  api: string;
  envName: string;
  version?: string;
  contactPhoneNumber: string
}
