import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ordemservicociencia } from "./ordemservicociencia";
import { Ordemservicoperfil } from "./ordemservicoperfil";

@Index("ordemservicocorpo_pkey", ["idordemservico"], { unique: true })
@Entity("ordemservicocorpo", { schema: "seguranca" })
export class Ordemservicocorpo {
  @PrimaryGeneratedColumn({ type: "integer", name: "idordemservico" })
  idordemservico: number;

  @Column("date", { name: "datacadastro", default: () => "'2018-01-01'" })
  datacadastro: string;

  @Column("date", { name: "datainiciovalidade", default: () => "'2018-01-01'" })
  datainiciovalidade: string;

  @Column("date", { name: "datafimvalidade", default: () => "'2018-01-01'" })
  datafimvalidade: string;

  @Column("character varying", {
    name: "idusuario",
    nullable: true,
    length: 30,
    default: () => "NULL::character varying",
  })
  idusuario: string | null;

  @Column("text", { name: "corpo", nullable: true })
  corpo: string | null;

  @OneToMany(
    () => Ordemservicociencia,
    (ordemservicociencia) => ordemservicociencia.idordemservico2
  )
  ordemservicociencias: Ordemservicociencia[];

  @OneToMany(
    () => Ordemservicoperfil,
    (ordemservicoperfil) => ordemservicoperfil.idordemservico2
  )
  ordemservicoperfils: Ordemservicoperfil[];
}
