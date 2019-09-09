import { Model, QueryBuilder, ModelClass } from 'objection';

export default function createModelMixin<M extends Model>(
  model: ModelClass<M>
) {
  async function findAll() {
    return model.query();
  }

  function findById(id: string) {
    return model.query().findById(id);
  }

  return { findAll, findById };
}
