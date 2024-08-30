import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createLivro, getLivroById, updateLivro } from '../services/api';
interface Livro {
    name: string;
    description: string;
    price: number;
    quantity: number;
}
function LivroForm() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [livro, setLivro] = useState<Livro>({
        name: '',
        description: '',
        price: 0,
        quantity: 0,
    });
    useEffect(() => {
        if (id) {
            loadLivro();
        }
    }, [id]);
    const loadLivro = async () => {
        try {
            const response = await getLivroById(id as string);
            setLivro(response.data);
        } catch (error) {
            console.error("Error loading product data", error);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLivro({
            ...livro,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (id) {
                await updateLivro(id, livro);
            } else {
                await createLivro(livro);
            }
            navigate('/');
        } catch (error) {
            console.error("Error saving product", error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome</label>
                <input
                    type="text"
                    name="name"
                    value={livro.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Descrição</label>
                <input
                    type="text"
                    name="description"
                    value={livro.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Preço</label>
                <input
                    type="number"
                    name="price"
                    value={livro.price}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Quantidade</label>
                <input
                    type="number"
                    name="quantity"
                    value={livro.quantity}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Salvar</button>
        </form>
    );
}
export default LivroForm;