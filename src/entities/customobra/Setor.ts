import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("setor_pk", ["idsetor"], { unique: true })
@Entity("setor", { schema: "customobra" })
export class Setor {
  @PrimaryGeneratedColumn({ type: "integer", name: "idsetor" })
  idsetor: number;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 50,
  })
  descricao: string | null;
}
