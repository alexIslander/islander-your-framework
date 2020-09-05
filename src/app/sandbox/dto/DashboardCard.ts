export interface DashboardCard {
  id: number;
  active: boolean;
  disabled: boolean;
  name: string;
  icon: string;
  detail: string;
  countryAlpha2Code: string;
  config: any[];
  nav: any[];
  action?: Function;
}
