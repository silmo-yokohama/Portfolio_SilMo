import TextInput from "@/Components/Forms/Inputs/TextInput";
import ImageLabel from "@/Components/Template/Forms/ImageLabel";
import MultiSelectLabel from "@/Components/Template/Forms/MultiSelectLabel";
import TextAreaLabel from "@/Components/Template/Forms/TextAreaLabel";
import TextLabel from "@/Components/Template/Forms/TextLabel";
import AdminSectionHeader from "@/Components/Template/Headers/AdminSectionHeader";
import { API } from "@/Constants/ApiEndpoint";
import { createWorkOption, setOptionState } from "@/Functions/API/WorkEvents";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const Edit = (props) => {
  const { work, categories, tags, skills } = props;
  const [categoryList, setCategoryList] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [skillList, setSkillList] = useState([]);

  console.log(props);

  const form = useForm({
    name: work.name,
    imagePath: work.image_path,
    image: "",
    url: work.url || "",
    content: work.content || "",
    categories: categories.map((i) => i.value),
    tags: tags.map((i) => i.value),
    skills: skills.map((i) => i.value),
  });

  const handlerOnChange = (e) => {
    const { name, value } = e.target;

    form.setData(name, value);
  };

  const handlerChangeImage = (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];

    form.setData({
      ...form.data,
      ...{
        imagePath: e.target.value,
        image: file,
      },
    });
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();

    console.log(form.data);
    // form.post(route("admin.works.update", { id: work.id }));
  };

  useEffect(() => {
    setOptionState(API.getCategory, setCategoryList);
    setOptionState(API.getTag, setTagList);
    setOptionState(API.getSkill, setSkillList);
  }, []);
  return (
    <AdminLayout pageTitle="実績" {...props}>
      <AdminSectionHeader
        title="実績一覧"
        backToRoute={route("admin.works.index")}
      ></AdminSectionHeader>

      <form method="post" onSubmit={handlerOnSubmit}>
        <div className="flex flex-col gap-3 md:gap-5">
          <TextLabel
            label="タイトル"
            name="name"
            value={form.data.name}
            onChange={handlerOnChange}
            isRequired={true}
          />
          <TextLabel
            type="url"
            label="URL"
            name="url"
            value={form.data.url}
            onChange={handlerOnChange}
          />
          <ImageLabel
            label="イメージ"
            name="image_path"
            value={form.data.image ? form.data.imagePath : ""}
            onChange={handlerChangeImage}
          />
          <div className="flex justify-center">
            <div className="mockup-window w-11/12 rounded-md border bg-base-300 md:w-1/2">
              <div className="aspect-video w-full">
                {form.data.image ? (
                  <img
                    className="w-full"
                    src={window.URL.createObjectURL(form.data.image)}
                    alt={form.data.imagePath}
                  />
                ) : (
                  <img
                    className="w-full"
                    src={form.data.imagePath}
                    alt={form.data.imagePath}
                  />
                )}
              </div>
            </div>
          </div>
          <TextAreaLabel
            label="本文"
            name="content"
            value={form.data.content}
            onChange={handlerOnChange}
            isRequired={true}
          />
          <MultiSelectLabel
            label="カテゴリー"
            name="category"
            options={categoryList}
            defaultValue={categories}
            onCreateOption={(data) =>
              createWorkOption(API.createCategory, data, () =>
                setOptionState(API.getCategory, setCategoryList),
              )
            }
            onChange={(values) =>
              form.setData(
                "categories",
                values.map((i) => i.value),
              )
            }
            isMulti
            placeholder="カテゴリーを選択..."
            isRequired={true}
          />
          <MultiSelectLabel
            label="タグ"
            name="tags"
            options={tagList}
            defaultValue={tags}
            onCreateOption={(data) =>
              createWorkOption(API.createTag, data, () =>
                setOptionState(API.getTag, setTagList),
              )
            }
            onChange={(values) =>
              form.setData(
                "tags",
                values.map((i) => i.value),
              )
            }
            isMulti
            placeholder="タグを選択..."
            isRequired={true}
          />
          <MultiSelectLabel
            label="スキル"
            name="skills"
            options={skillList}
            defaultValue={skills}
            onCreateOption={(data) =>
              createWorkOption(API.createSkill, data, () =>
                setOptionState(API.getSkill, setSkillList),
              )
            }
            onChange={(values) =>
              form.setData(
                "skills",
                values.map((i) => i.value),
              )
            }
            isMulti
            placeholder="スキルを選択..."
            isRequired={true}
          />
        </div>

        <div className="my-5 text-center md:my-10">
          <button className="btn btn-wide border bg-primary text-white hover:border-primary hover:bg-base-200 hover:text-current">
            登録
          </button>
        </div>
      </form>
    </AdminLayout>
  );
};

export default Edit;
