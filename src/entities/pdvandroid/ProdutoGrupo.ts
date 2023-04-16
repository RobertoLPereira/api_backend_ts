import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("produto_grupo_descricao_key", ["descricao"], { unique: true })
@Index("produto_grupo_pkey", ["id"], { unique: true })
@Entity("produto_grupo", { schema: "pdvandroid" })
export class ProdutoGrupo {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "descricao", unique: true, length: 30 })
  descricao: string;

  @Column("character varying", { name: "color", nullable: true, length: 10 })
  color: string | null;

  @Column("text", { name: "img", nullable: true })
  img: string | null;
}
