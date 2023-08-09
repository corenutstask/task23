import { Subject } from 'src/app/models/subject_deails.model';
export class Batch{

  public batch_id?:number
  public batch_name?:string
  public branch_id?:number
  public created_by?:number
  public created_on?:Date
  public modified_by?:number
  public modifed_on?:Date
  public status?:string

  public subjects?:any[]
}
