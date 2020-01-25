import { InjectionToken } from '@angular/core';

export interface OrgConfig {
    org: string;
    city: string;
}

export const APP_CONFIG: OrgConfig = {
    org: 'Talentica',
    city: 'Pune',
};

// export const myToken = new InjectionToken<OrgConfig>('CONFIG_TOKEN');


export const myToken = new InjectionToken<OrgConfig>('CONFIG_TOKEN', {
    providedIn: 'root',
    factory: () => APP_CONFIG,
});
