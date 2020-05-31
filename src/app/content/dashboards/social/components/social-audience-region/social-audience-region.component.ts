import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { ColorScheme, StyleService } from '@app/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
    selector: 'prx-social-audience-region',
    templateUrl: './social-audience-region.component.html',
    styleUrls: ['./social-audience-region.component.scss']
})
export class SocialAudienceRegionComponent implements OnInit, AfterViewInit {
    private map: am4maps.MapChart;

    regions = [
        {
            country: { code: 'GB', name: 'United Kingdom' },
            audience: { total: 9549, percentage: 76.82 }
        },
        {
            country: { code: 'US', name: 'United States' },
            audience: { total: 5624, percentage: 47.58 }
        },
        {
            country: { code: 'BR', name: 'Brazil' },
            audience: { total: 3023, percentage: 51.82 }
        },
        {
            country: { code: 'FR', name: 'France' },
            audience: { total: 1641, percentage: 16.05 }
        },
        {
            country: { code: 'CA', name: 'Canada' },
            audience: { total: 558, percentage: 2.74 }
        }
    ];

    constructor(private zone: NgZone, private _styles: StyleService) {}

    ngOnInit() {}

    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            // Create map instance
            let map = am4core.create('chartdiv', am4maps.MapChart);
            map.projection = new am4maps.projections.Miller();

            // Create map polygon series for world map
            let worldSeries = map.series.push(new am4maps.MapPolygonSeries());
            worldSeries.useGeodata = true;
            worldSeries.geodata = am4geodata_worldLow;
            worldSeries.exclude = ['AQ'];
            worldSeries.data = this.regions.map(region => {
                return {
                    id: region.country.code,
                    percentage: region.audience.percentage
                };
            });

            let worldPolygon = worldSeries.mapPolygons.template;
            worldPolygon.tooltipText = '{name}';
            worldPolygon.nonScalingStroke = true;
            worldPolygon.strokeOpacity = 0.5;
            worldPolygon.fill = am4core.color(this._styles.GrayScale.gray300);
            worldPolygon.propertyFields.fill = 'color';
            worldPolygon.adapter.add('fill', (fill, target: any) => {
                if (
                    target.dataItem.dataContext &&
                    target.dataItem.dataContext.percentage
                ) {
                    const percentage = target.dataItem.dataContext.percentage;

                    if (percentage >= 75) {
                        return am4core.color(this._styles.palette.colorSuccess);
                    } else if (percentage >= 50) {
                        return am4core.color(this._styles.palette.colorInfo);
                    } else if (percentage >= 25) {
                        return am4core.color(this._styles.palette.colorWarning);
                    } else {
                        return am4core.color(this._styles.palette.colorDanger);
                    }
                }

                return fill;
            });

            // Set map definition
            map.geodata = am4geodata_worldLow;
            map.zoomControl = new am4maps.ZoomControl();

            // Save the map instance
            this.map = map;
        });
    }

    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.map) {
                this.map.dispose();
            }
        });
    }

    color(region: any): ColorScheme {
        const percentage = region.audience.percentage;
        let scheme: ColorScheme;

        if (percentage >= 75) {
            scheme = ColorScheme.Success;
        } else if (percentage >= 50) {
            scheme = ColorScheme.Info;
        } else if (percentage >= 25) {
            scheme = ColorScheme.Warning;
        } else {
            scheme = ColorScheme.Danger;
        }

        return scheme;
    }
}
