import {
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Avaliacao } from "./Avaliacao";
import { Bemequipamento } from "./Bemequipamento";
import { Bemimovel } from "./Bemimovel";
import { Bemlaudo } from "./Bemlaudo";
import { Bemmaquina } from "./Bemmaquina";
import { Bemmovel } from "./Bemmovel";
import { Bempessoa } from "./Bempessoa";
import { Bemproducaoagricola } from "./Bemproducaoagricola";
import { Bemsemovente } from "./Bemsemovente";
import { Bensvinculados } from "./Bensvinculados";
import { Caracteristicacondominio } from "./Caracteristicacondominio";
import { Caracteristicasimovel } from "./Caracteristicasimovel";
import { Comodos } from "./Comodos";
import { Garagemvinculada } from "./Garagemvinculada";
import { Garantia } from "./Garantia";
import { Guiatransporte } from "./Guiatransporte";
import { Hipoteca } from "./Hipoteca";
import { Registro } from "./Registro";
import { Relacionamentobempessoas } from "./Relacionamentobempessoas";
import { Seguro } from "./Seguro";

@Index("pk_bens", ["idbem"], { unique: true })
@Entity("bem", { schema: "cup" })
export class Bem {
  @Column("integer", { name: "idpessoa", default: () => "0" })
  idpessoa: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "idbem" })
  idbem: number;

  @Column("integer", { name: "idtipobem", default: () => "0" })
  idtipobem: number;

  @Column("character varying", {
    name: "referencia",
    nullable: true,
    length: 10,
    default: () => "NULL::character varying",
  })
  referencia: string | null;

  @Column("character varying", {
    name: "nomebem",
    nullable: true,
    length: 70,
    default: () => "NULL::character varying",
  })
  nomebem: string | null;

  @Column("date", {
    name: "cadastradoem",
    nullable: true,
    default: () => "now()",
  })
  cadastradoem: string | null;

  @Column("integer", { name: "idendereco", nullable: true })
  idendereco: number | null;

  @Column("integer", { name: "idbemprincipal", nullable: true })
  idbemprincipal: number | null;

  @Column("integer", {
    name: "qtdbensassociados",
    nullable: true,
    default: () => "0",
  })
  qtdbensassociados: number | null;

  @Column("character varying", {
    name: "situacaogarantia",
    nullable: true,
    length: 1,
    default: () => "NULL::character varying",
  })
  situacaogarantia: string | null;

  @Column("numeric", {
    name: "valor",
    nullable: true,
    precision: 15,
    scale: 2,
    default: () => "NULL::numeric",
  })
  valor: string | null;

  @Column("integer", {
    name: "idsituacaobem",
    nullable: true,
    default: () => "0",
  })
  idsituacaobem: number | null;

  @Column("integer", {
    name: "idestadoconservacao",
    nullable: true,
    default: () => "0",
  })
  idestadoconservacao: number | null;

  @Column("integer", { name: "idade", nullable: true, default: () => "0" })
  idade: number | null;

  @Column("integer", { name: "idcplaca", nullable: true, default: () => "0" })
  idcplaca: number | null;

  @Column("integer", { name: "idcfotos", nullable: true, default: () => "0" })
  idcfotos: number | null;

  @Column("character varying", {
    name: "sitioweb",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  sitioweb: string | null;

  @Column("integer", {
    name: "idanunciado",
    nullable: true,
    default: () => "0",
  })
  idanunciado: number | null;

  @Column("integer", {
    name: "idcdestaque",
    nullable: true,
    default: () => "0",
  })
  idcdestaque: number | null;

  @Column("text", { name: "aviso", nullable: true })
  aviso: string | null;

  @Column("character varying", {
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
    default: () => "NULL::character varying",
  })
  idusuario: string | null;

  @Column("character varying", {
    name: "idestacao",
    nullable: true,
    length: 50,
    default: () => "NULL::character varying",
  })
  idestacao: string | null;

  @Column("date", {
    name: "dataatualizacaocadastro",
    nullable: true,
    default: () => "now()",
  })
  dataatualizacaocadastro: string | null;

  @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.idbem2)
  avaliacaos: Avaliacao[];

  @OneToOne(() => Bemequipamento, (bemequipamento) => bemequipamento.idbem2)
  bemequipamento: Bemequipamento;

  @OneToMany(() => Bemimovel, (bemimovel) => bemimovel.idbem2)
  bemimovels: Bemimovel[];

  @OneToMany(() => Bemlaudo, (bemlaudo) => bemlaudo.idbem2)
  bemlaudos: Bemlaudo[];

  @OneToOne(() => Bemmaquina, (bemmaquina) => bemmaquina.idbem2)
  bemmaquina: Bemmaquina;

  @OneToMany(() => Bemmovel, (bemmovel) => bemmovel.bemIdbem2)
  bemmovels: Bemmovel[];

  @OneToMany(() => Bempessoa, (bempessoa) => bempessoa.idbem2)
  bempessoas: Bempessoa[];

  @OneToMany(
    () => Bemproducaoagricola,
    (bemproducaoagricola) => bemproducaoagricola.idbem2
  )
  bemproducaoagricolas: Bemproducaoagricola[];

  @OneToMany(() => Bemsemovente, (bemsemovente) => bemsemovente.idbem2)
  bemsemoventes: Bemsemovente[];

  @OneToMany(
    () => Bensvinculados,
    (bensvinculados) => bensvinculados.idbemprincipal2
  )
  bensvinculados: Bensvinculados[];

  @OneToMany(
    () => Caracteristicacondominio,
    (caracteristicacondominio) => caracteristicacondominio.idbem2
  )
  caracteristicacondominios: Caracteristicacondominio[];

  @OneToMany(
    () => Caracteristicasimovel,
    (caracteristicasimovel) => caracteristicasimovel.idbem2
  )
  caracteristicasimovels: Caracteristicasimovel[];

  @OneToMany(() => Comodos, (comodos) => comodos.idbem2)
  comodos: Comodos[];

  @OneToMany(
    () => Garagemvinculada,
    (garagemvinculada) => garagemvinculada.idbem2
  )
  garagemvinculadas: Garagemvinculada[];

  @OneToMany(() => Garantia, (garantia) => garantia.idbem2)
  garantias: Garantia[];

  @OneToMany(() => Guiatransporte, (guiatransporte) => guiatransporte.idbem2)
  guiatransportes: Guiatransporte[];

  @OneToMany(() => Hipoteca, (hipoteca) => hipoteca.idbem2)
  hipotecas: Hipoteca[];

  @OneToMany(() => Registro, (registro) => registro.idbem2)
  registros: Registro[];

  @OneToMany(
    () => Relacionamentobempessoas,
    (relacionamentobempessoas) => relacionamentobempessoas.idbem2
  )
  relacionamentobempessoas: Relacionamentobempessoas[];

  @OneToMany(() => Seguro, (seguro) => seguro.idbem2)
  seguros: Seguro[];
}
