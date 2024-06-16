import type { InferOutput } from 'valibot'
import { email, maxLength, nonEmpty, minLength, object, pipe, string } from 'valibot'

export const messageSchema = object({
  name: pipe(
    string('Name should be a string'),
    nonEmpty('Name is required'),
    minLength(2, 'Name should be at least 2 characters'),
    maxLength(64, 'Name shouldn\'t exceed 64 characters'),
  ),
  email: pipe(
    string('Email should be a string'),
    nonEmpty('Email is required'),
    maxLength(128, 'Email shouldn\'t exceed 128 characters'),
    email('Email should look like: username@domain.com'),
  ),
  message: pipe(
    string('Message should be a string'),
    nonEmpty('Message is required'),
    minLength(8, 'Message should be at least 8 characters'),
    maxLength(512, 'Message shouldn\'t exceed 512 characters'),
  ),
})

export type MessageSchema = InferOutput<typeof messageSchema>
