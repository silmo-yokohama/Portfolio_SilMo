import { router } from "@inertiajs/react";

export const dataDelete = (id, name, target) => {
  const answer = confirm(`${name}を削除してよろしいですか？`);

  if (answer) {
    router.delete(route(`admin.${target}.destroy`, { id: id }));
  }
};
