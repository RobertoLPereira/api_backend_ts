import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bem } from "./Bem";

@Index("fki_fk_segurobem", ["idbem"], {})
@Index("pk_seguro", ["idseguro"], { unique: true })
@Entity("seguro", { schema: "cup" })
export class Seguro {
  @PrimaryGeneratedColumn({ type: "integer", name: "idseguro" })
  idseguro: number;

  @Column("integer", { name: "idbem" })
  idbem: number;

  @Column("integer", { name: "idseguradora" })
  idseguradora: number;

  @Column("numeric", {
    name: "valorseguro",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  valorseguro: string | null;

  @Column("date", { name: "datavencimento", nullable: true })
  datavencimento: string | null;

  @Column("character varying", {
    name: "numeroapolice",
    nullable: true,
    length: 20,
  })
  numeroapolice: string | null;

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

  @ManyToOne(() => Bem, (bem) => bem.seguros)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
