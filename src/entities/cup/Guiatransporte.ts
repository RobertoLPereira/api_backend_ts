import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bem } from "./Bem";

@Index("fki_fk_transportebem", ["idbem"], {})
@Index("pk_guiatransporte", ["idguiatransporte"], { unique: true })
@Entity("guiatransporte", { schema: "cup" })
export class Guiatransporte {
  @PrimaryGeneratedColumn({ type: "integer", name: "idguiatransporte" })
  idguiatransporte: number;

  @Column("integer", { name: "idbem" })
  idbem: number;

  @Column("character varying", { name: "numeroguiatransporte", length: 20 })
  numeroguiatransporte: string;

  @Column("date", { name: "dataguiatransporte", nullable: true })
  dataguiatransporte: string | null;

  @Column("integer", { name: "quantidadecabecas", nullable: true })
  quantidadecabecas: number | null;

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

  @ManyToOne(() => Bem, (bem) => bem.guiatransportes)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
