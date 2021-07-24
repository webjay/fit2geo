export interface Record {
  timestamp: Date;
  position_lat: number;
  position_long: number;
  distance: number;
  accumulated_power: number;
  altitude: number;
  speed: number;
  heart_rate: number;
  cadence: number;
  fractional_cadence: number;
  elapsed_time: number;
  timer_time: number;
}

export interface Fit {
  records: Array<Record>;
}
