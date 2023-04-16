import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("programafomento_pkey", ["idPrograma"], { unique: true })
@Entity("programafomento", { schema: "apoio" })
export class Programafomento {
  @PrimaryGeneratedColumn({ type: "integer", name: "idPrograma" })
  idPrograma: number;

  @Column("character varying", { name: "denominacao", length: 50 })
  denominacao: string;

  @Column("character varying", {
    name: "codigo",
    nullable: true,
    length: 10,
    default: () => "NULL::character varying",
  })
  codigo: string | null;
}
