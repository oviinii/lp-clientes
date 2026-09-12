export const STATUSES=[
 ['new','Novo briefing'],['backlog','Backlog'],['missing_info','Faltam informações'],['planning','Em planejamento'],['in_production','Em produção'],['internal_review','Revisão interna'],['client_approval','Aguardando aprovação'],['approved','Aprovado'],['published','Publicado'],['archived','Arquivado']
] as const
export type Status=typeof STATUSES[number][0]
export const statusLabel=(s:string)=>STATUSES.find(([v])=>v===s)?.[1]||s
