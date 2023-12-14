export interface Contact {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

export interface ShowHideWithId {
    show: boolean, contact: Contact | null
  }