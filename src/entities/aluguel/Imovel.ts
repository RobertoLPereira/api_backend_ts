import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Aluguelpadrao } from "./Aluguelpadrao";
import { Centrocusto } from "./Centrocusto";
import { Faixadeconsumo } from "./Faixadeconsumo";
import { Pessoas } from "./Pessoas";
import { Imovelunidade } from "./Imovelunidade";
import { Taxaadministracao } from "./Taxaadministracao";
import { Vinculos } from "./Vinculos";

@Index("imovel_pkey", ["idimovel"], { unique: true })
@Entity("imovel", { schema: "aluguel" })
export class Imovel {
  @PrimaryGeneratedColumn({ type: "integer", name: "idimovel" })
  idimovel: number;

  @Column("character varying", { name: "descricao", length: 50 })
  descricao: string;

  @Column("character varying", { name: "endereco", length: 100 })
  endereco: string;

  @Column("integer", { name: "status", nullable: true, default: () => "1" })
  status: number | null;

  @Column("numeric", {
    name: "valordoimovel",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "150000",
  })
  valordoimovel: string | null;

  @Column("integer", { name: "idcategoriadeimoveis", nullable: true })
  idcategoriadeimoveis: number | null;

  @OneToMany(() => Aluguelpadrao, (aluguelpadrao) => aluguelpadrao.idimovel)
  aluguelpadraos: Aluguelpadrao[];

  @OneToMany(() => Centrocusto, (centrocusto) => centrocusto.idimovel)
  centrocustos: Centrocusto[];

  @OneToMany(() => Faixadeconsumo, (faixadeconsumo) => faixadeconsumo.idimovel)
  faixadeconsumos: Faixadeconsumo[];

  @ManyToOne(() => Pessoas, (pessoas) => pessoas.imovels)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa: Pessoas;

  @OneToMany(() => Imovelunidade, (imovelunidade) => imovelunidade.idimovel)
  imovelunidades: Imovelunidade[];

  @OneToMany(
    () => Taxaadministracao,
    (taxaadministracao) => taxaadministracao.idimovel
  )
  taxaadministracaos: Taxaadministracao[];

  @OneToMany(() => Vinculos, (vinculos) => vinculos.idimovel)
  vinculos: Vinculos[];
}
