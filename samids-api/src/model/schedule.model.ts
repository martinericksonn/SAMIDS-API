export class Schedule {
  private offer_no;
  private subj_no;
  private subj_name;
  private sch_days;
  private sch_time;
  private sy;
  private term;
  private fac_id;

  constructor(body: any) {
    this.offer_no = body['offer_no'];
    this.subj_no = body['subj_no'];
    this.subj_name = body['subj_name'];
    this.sch_days = body['sch_days'];
    this.sch_time = body['sch_time'];
    this.sy = body['sy'];
    this.term = body['term'];
    this.fac_id = body['fac_id'];
  }

  log() {
    console.log(
      `${this.offer_no} ${this.subj_no} ${this.subj_no}
       ${this.subj_name} ${this.sch_days} ${this.sch_time} 
       ${this.sy} ${this.term} ${this.fac_id}`,
    );
  }

  toJson() {
    return {
      offer_no: this.offer_no,
      subj_no: this.subj_no,
      subj_name: this.subj_name,
      sch_days: this.sch_days,
      sch_time: this.sch_time,
      sy: this.sy,
      term: this.term,
      fac_id: this.fac_id,
    };
  }
}
