export interface Log {
    min_id: string;
    max_id: string;
    events: Event[];
    sawmill: boolean;
    min_time_at: Date;
    reached_record_limit: boolean;
}
export interface Event {
    id: string;
    source_ip: string;
    program: string;
    message: string;
    received_at: Date;
    generated_at: Date;
    display_received_at: string;
    source_id: number;
    source_name: string;
    hostname: string;
    severity: string;
    facility: string;
  }