import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bem } from "./Bem";

@Index("pk_avaliacao", ["idavaliacao"], { unique: true })
@Index("fki_fk_avaliacaobem", ["idbem"], {})
@Entity("avaliacao", { schema: "cup" })
export class Avaliacao {
  @PrimaryGeneratedColumn({ type: "integer", name: "idavaliacao" })
  idavaliacao: number;

  @Column("integer", { name: "idbem" })
  idbem: number;

  @Column("date", { name: "dataavaliacao", nullable: true })
  dataavaliacao: string | null;

  @Column("numeric", { name: "valor", nullable: true, precision: 15, scale: 2 })
  valor: string | null;

  @Column("integer", { name: "idmoeda", nullable: true })
  idmoeda: number | null;

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

  @ManyToOne(() => Bem, (bem) => bem.avaliacaos)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
