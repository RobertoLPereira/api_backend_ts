import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Bem } from "./Bem";

@Index("fki_fk_bemgarantia", ["idbem"], {})
@Index("pk_garantia", ["idgarantia"], { unique: true })
@Entity("garantia", { schema: "cup" })
export class Garantia {
  @Column("integer", { primary: true, name: "idgarantia" })
  idgarantia: number;

  @Column("integer", { name: "idbem", nullable: true })
  idbem: number | null;

  @Column("numeric", {
    name: "percentualuso",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  percentualuso: string | null;

  @Column("date", { name: "datainicial", nullable: true })
  datainicial: string | null;

  @Column("numeric", { name: "valor", nullable: true, precision: 15, scale: 2 })
  valor: string | null;

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

  @ManyToOne(() => Bem, (bem) => bem.garantias)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
