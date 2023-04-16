import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Bem } from "./Bem";

@Index("fki_fk_escriturabem", ["idbem"], {})
@Index("pk_registro", ["idregistro"], { unique: true })
@Entity("registro", { schema: "cup" })
export class Registro {
  @Column("integer", { primary: true, name: "idregistro" })
  idregistro: number;

  @Column("integer", { name: "idbem" })
  idbem: number;

  @Column("character varying", {
    name: "nomecartorio",
    nullable: true,
    length: 100,
  })
  nomecartorio: string | null;

  @Column("character varying", {
    name: "numerolivro",
    nullable: true,
    length: 20,
  })
  numerolivro: string | null;

  @Column("character varying", {
    name: "numerofolha",
    nullable: true,
    length: 20,
  })
  numerofolha: string | null;

  @Column("character varying", {
    name: "numeroregistro",
    nullable: true,
    length: 20,
  })
  numeroregistro: string | null;

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

  @ManyToOne(() => Bem, (bem) => bem.registros)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
