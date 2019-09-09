import { Model as TModel } from 'objection';

export default function createModelMixin(Model: typeof TModel) {
  async function findAll() {
    return Model.query();
  }

  async function findById(id: string) {
    return Model.query().findById(id);
  }

  return { findAll, findById };
}
