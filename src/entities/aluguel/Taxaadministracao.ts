import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contrato } from "./Contrato";
import { Imovel } from "./Imovel";
import { Pessoas } from "./Pessoas";

@Index("taxaadministracao_pkey", ["id"], { unique: true })
@Entity("taxaadministracao", { schema: "aluguel" })
export class Taxaadministracao {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("double precision", {
    name: "taxa",
    nullable: true,
    precision: 53,
    default: () => "'0'",
  })
  taxa: number | null;

  @Column("double precision", {
    name: "valor",
    nullable: true,
    precision: 53,
    default: () => "'0'",
  })
  valor: number | null;

  @Column("integer", { name: "situacao", nullable: true, default: () => "1" })
  situacao: number | null;

  @ManyToOne(() => Contrato, (contrato) => contrato.taxaadministracaos)
  @JoinColumn([{ name: "idcontrato", referencedColumnName: "idcontrato" }])
  idcontrato: Contrato;

  @ManyToOne(() => Imovel, (imovel) => imovel.taxaadministracaos)
  @JoinColumn([{ name: "idimovel", referencedColumnName: "idimovel" }])
  idimovel: Imovel;

  @ManyToOne(() => Pessoas, (pessoas) => pessoas.taxaadministracaos)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa: Pessoas;
}
