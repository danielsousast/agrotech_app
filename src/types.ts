export type Cultivation = {
  id: number;
  cultura: number;
};

export type PlantingDayResponseItem = {
  ciclo: string;
  cultura: string;
  diaFim: number;
  diaIni: number;
  mesFim: number;
  mesIni: number;
  municipio: string;
  risco: number;
  safraFim: 9999;
  safraIni: 9999;
  solo: string;
  uf: string;
};
