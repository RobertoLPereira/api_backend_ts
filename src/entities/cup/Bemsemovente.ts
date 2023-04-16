import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bem } from "./Bem";

@Index("fki_fk_bemsemovente", ["idbem"], {})
@Index("pk_semovente", ["idbemsemovente"], { unique: true })
@Entity("bemsemovente", { schema: "cup" })
export class Bemsemovente {
  @Column("integer", { name: "idbem" })
  idbem: number;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 150,
  })
  descricao: string | null;

  @Column("integer", { name: "idtipobemsemovente", nullable: true })
  idtipobemsemovente: number | null;

  @Column("integer", { name: "quantidadecabecas", nullable: true })
  quantidadecabecas: number | null;

  @Column("numeric", {
    name: "valortotal",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  valortotal: string | null;

  @Column("character", {
    name: "situacaonimentoinloco",
    nullable: true,
    length: 1,
  })
  situacaonimentoinloco: string | null;

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

  @PrimaryGeneratedColumn({ type: "integer", name: "idbemsemovente" })
  idbemsemovente: number;

  @ManyToOne(() => Bem, (bem) => bem.bemsemoventes)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
