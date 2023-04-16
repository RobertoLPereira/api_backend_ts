import { Column, Entity, Index } from "typeorm";

@Index("pk_cargo", ["idcargo"], { unique: true })
@Entity("cargo", { schema: "cup" })
export class Cargo {
  @Column("integer", { primary: true, name: "idcargo" })
  idcargo: number;

  @Column("character varying", { name: "descricao", length: 50 })
  descricao: string;

  @Column("character", {
    name: "status",
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  status: string | null;

  @Column("date", {
    name: "dataatualizacao",
    nullable: true,
    default: () => "now()",
  })
  dataatualizacao: string | null;

  @Column("character varying", {
    name: "idusuario",
    nullable: true,
    length: 20,
  })
  idusuario: string | null;

  @Column("character varying", {
    name: "idestacao",
    nullable: true,
    length: 50,
  })
  idestacao: string | null;
}
