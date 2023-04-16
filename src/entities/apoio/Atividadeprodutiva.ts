import { Column, Entity, Index } from "typeorm";

@Index("atividadeprodutiva_pkey", ["idAtividadeProdutiva"], { unique: true })
@Entity("atividadeprodutiva", { schema: "apoio" })
export class Atividadeprodutiva {
  @Column("integer", { primary: true, name: "idAtividadeProdutiva" })
  idAtividadeProdutiva: number;

  @Column("character varying", { name: "AtividadeProdutiva", length: 45 })
  atividadeProdutiva: string;
}
