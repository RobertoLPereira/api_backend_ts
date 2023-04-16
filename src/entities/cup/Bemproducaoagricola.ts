import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bem } from "./Bem";

@Index("fki_fk_bemproducao", ["idbem"], {})
@Index("bemproducaoagricola_pkey", ["idproducaoagricola"], { unique: true })
@Entity("bemproducaoagricola", { schema: "cup" })
export class Bemproducaoagricola {
  @Column("integer", { name: "idbem" })
  idbem: number;

  @Column("integer", { name: "anosafra", nullable: true })
  anosafra: number | null;

  @Column("character varying", {
    name: "iniciosafra",
    nullable: true,
    length: 6,
  })
  iniciosafra: string | null;

  @Column("character varying", {
    name: "finalsafra",
    nullable: true,
    length: 6,
  })
  finalsafra: string | null;

  @Column("numeric", {
    name: "valorproducao",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  valorproducao: string | null;

  @Column("numeric", {
    name: "areaplantada",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  areaplantada: string | null;

  @Column("numeric", {
    name: "quantidadeproduzida",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  quantidadeproduzida: string | null;

  @Column("integer", { name: "idunidademedida", nullable: true })
  idunidademedida: number | null;

  @Column("integer", { name: "idsubtiposafra", nullable: true })
  idsubtiposafra: number | null;

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

  @PrimaryGeneratedColumn({ type: "integer", name: "idproducaoagricola" })
  idproducaoagricola: number;

  @ManyToOne(() => Bem, (bem) => bem.bemproducaoagricolas)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
