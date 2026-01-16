import React from "react";
import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {createTask, deleteTask, updateTask, getTask } from '../api/tasks.api'
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import { Navbar } from "../components/Navbar"
import {Btns} from '../components/Btns'





export function TaskFormPage() {

  const {register, handleSubmit, formState: {errors},
  setValue
} = useForm()

  const navigate = useNavigate()
  const params = useParams()
  // console.log(params)

  const onsubmit = handleSubmit(async data => {
      if (params.id){
        await updateTask(params.id, data)
        toast.success('tarea actualizada',{
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "#fff",
          }
        })
    } else {
      await createTask(data);
      toast.success('tarea creada',{
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        }
      })
    }

    navigate("/tasks");
  //  await createTask(data);
   navigate("/tasks", );
  });

  useEffect(() => {
    async function loadTask() { 
      if (params.id) {
        const {
          data: {title, description},
        } = await getTask(params.id);
        setValue("title", title);
        setValue("description", description);
      }
    }
    loadTask();
  }, []);


    return (
      
      <div>
        <Navbar/>
        <Btns/>
        <form onSubmit={onsubmit}>
          <input type="text" placeholder="title" 
          {...register("title", {required: true })}
          />
          {errors.title && <span>this field is required</span>}
          <textarea row="3" placeholder="Description"
          {...register("description", {required: true })}
          ></textarea>
          {errors.description && <span>this field is required</span>}
          <button>save</button>
        </form>

        {params.id && <button onClick={async () => {
          const accepted = window.confirm("are you sure you want to delete it?") 
          if (accepted) {
          await deleteTask(params.id)
          toast.success('tarea eliminada',{
            position: "bottom-right",
            style: {
              background: "#101010",
              color: "#fff",
            }
          })
          navigate("/tasks");
          }
        }}>
          Delete
        </button>}
      
      </div>
    );
  }
  