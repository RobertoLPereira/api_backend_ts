import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_tipodeinvestimento", ["idtipoinvestimento"], { unique: true })
@Entity("tipodeinvestimento", { schema: "customobra" })
export class Tipodeinvestimento {
  @PrimaryGeneratedColumn({ type: "integer", name: "idtipoinvestimento" })
  idtipoinvestimento: number;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 20,
  })
  descricao: string | null;
}
