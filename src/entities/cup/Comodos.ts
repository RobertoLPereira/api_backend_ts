import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bem } from "./Bem";

@Index("fki_fk_comodosbem", ["idbem"], {})
@Index("comodos_pkey", ["idcomodos"], { unique: true })
@Entity("comodos", { schema: "cup" })
export class Comodos {
  @Column("integer", { name: "idpessoa", default: () => "0" })
  idpessoa: number;

  @Column("integer", { name: "idbem", default: () => "0" })
  idbem: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "idcomodos" })
  idcomodos: number;

  @Column("integer", {
    name: "qtddormitorios",
    nullable: true,
    default: () => "0",
  })
  qtddormitorios: number | null;

  @Column("integer", { name: "nrosuites", nullable: true, default: () => "0" })
  nrosuites: number | null;

  @Column("integer", { name: "nrosalas", nullable: true, default: () => "0" })
  nrosalas: number | null;

  @Column("integer", { name: "nrolavabos", nullable: true, default: () => "0" })
  nrolavabos: number | null;

  @Column("integer", {
    name: "nrodependencias",
    nullable: true,
    default: () => "0",
  })
  nrodependencias: number | null;

  @Column("boolean", {
    name: "armarioscozinha",
    nullable: true,
    default: () => "false",
  })
  armarioscozinha: boolean | null;

  @Column("boolean", {
    name: "armariosembutidos",
    nullable: true,
    default: () => "false",
  })
  armariosembutidos: boolean | null;

  @ManyToOne(() => Bem, (bem) => bem.comodos)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
