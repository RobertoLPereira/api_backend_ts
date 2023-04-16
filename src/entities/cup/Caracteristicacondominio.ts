import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bem } from "./Bem";

@Index("fki_fk_caracterbem", ["idbem"], {})
@Index("caracteristicacondominio_pkey", ["idcaracteristicacondominio"], {
  unique: true,
})
@Entity("caracteristicacondominio", { schema: "cup" })
export class Caracteristicacondominio {
  @PrimaryGeneratedColumn({
    type: "integer",
    name: "idcaracteristicacondominio",
  })
  idcaracteristicacondominio: number;

  @Column("integer", { name: "idpessoa", default: () => "0" })
  idpessoa: number;

  @Column("integer", { name: "idbem", default: () => "0" })
  idbem: number;

  @Column("integer", { name: "idcpilotis", nullable: true, default: () => "0" })
  idcpilotis: number | null;

  @Column("integer", {
    name: "idcduplaentrada",
    nullable: true,
    default: () => "0",
  })
  idcduplaentrada: number | null;

  @Column("integer", {
    name: "idcarealazer",
    nullable: true,
    default: () => "0",
  })
  idcarealazer: number | null;

  @Column("integer", {
    name: "idcelevador",
    nullable: true,
    default: () => "0",
  })
  idcelevador: number | null;

  @Column("integer", {
    name: "tipoaquecedor",
    nullable: true,
    default: () => "0",
  })
  tipoaquecedor: number | null;

  @Column("character varying", {
    name: "nomecondominio",
    nullable: true,
    length: 30,
    default: () => "NULL::character varying",
  })
  nomecondominio: string | null;

  @Column("character varying", {
    name: "nomecondominioabreviado",
    nullable: true,
    length: 10,
    default: () => "NULL::character varying",
  })
  nomecondominioabreviado: string | null;

  @Column("numeric", {
    name: "valorcondominio",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0.00",
  })
  valorcondominio: string | null;

  @Column("integer", {
    name: "idcvidroisolamento",
    nullable: true,
    default: () => "0",
  })
  idcvidroisolamento: number | null;

  @Column("integer", {
    name: "nropavimentos",
    nullable: true,
    default: () => "0",
  })
  nropavimentos: number | null;

  @Column("character varying", {
    name: "torre",
    nullable: true,
    length: 10,
    default: () => "NULL::character varying",
  })
  torre: string | null;

  @ManyToOne(() => Bem, (bem) => bem.caracteristicacondominios)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
