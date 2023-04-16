import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bem } from "./Bem";

@Index("fki_fk_caractbem", ["idbem"], {})
@Index("caracteristicasimovel_pkey", ["idcaracteristicas"], { unique: true })
@Entity("caracteristicasimovel", { schema: "cup" })
export class Caracteristicasimovel {
  @PrimaryGeneratedColumn({ type: "integer", name: "idcaracteristicas" })
  idcaracteristicas: number;

  @Column("integer", { name: "idpessoa", default: () => "0" })
  idpessoa: number;

  @Column("integer", { name: "idbem", default: () => "0" })
  idbem: number;

  @Column("integer", {
    name: "qtdgaragens",
    nullable: true,
    default: () => "0",
  })
  qtdgaragens: number | null;

  @Column("character varying", {
    name: "identificacaogaragens",
    nullable: true,
    length: 15,
    default: () => "NULL::character varying",
  })
  identificacaogaragens: string | null;

  @Column("integer", {
    name: "tipogaragem",
    nullable: true,
    default: () => "0",
  })
  tipogaragem: number | null;

  @Column("character varying", {
    name: "localizacaogaragem",
    nullable: true,
    length: 40,
    default: () => "NULL::character varying",
  })
  localizacaogaragem: string | null;

  @Column("integer", {
    name: "idchobbybox",
    nullable: true,
    default: () => "0",
  })
  idchobbybox: number | null;

  @Column("character varying", {
    name: "identificacaohobbybox",
    nullable: true,
    length: 20,
    default: () => "NULL::character varying",
  })
  identificacaohobbybox: string | null;

  @Column("integer", {
    name: "idcbombahidraulica",
    nullable: true,
    default: () => "0",
  })
  idcbombahidraulica: number | null;

  @ManyToOne(() => Bem, (bem) => bem.caracteristicasimovels)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
