from typing import Union
from pydantic import BaseModel
from typing import Optional

from sqlmodel import Field, Session, SQLModel, create_engine, select


class Hero(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    secret_name: str
    age: Optional[int] = None


# hero_1 = Hero(name="Deadpond", secret_name="Dive Wilson")
# hero_2 = Hero(name="Spider-Boy", secret_name="Pedro Parqueador")
# hero_3 = Hero(name="Rusty-Man", secret_name="Tommy Sharp", age=48)

engine = create_engine("sqlite:///database.db")


SQLModel.metadata.create_all(engine)

with Session(engine) as session:
    statement = select(Hero)
    hero = session.exec(statement).all()
    # session.add(hero_1)
    # session.add(hero_2)
    # session.add(hero_3)
    # session.commit()


class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None