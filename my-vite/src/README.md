## Add child route to a component

App.tsx

`<Route path='/allergies' element={<Allergies />}/>`

Home.tsx

Pages/Home.tsx (to reach Allergies.tsx)

```
              <li>
                <Link
                  className="tocolor--letter"
                  to="/allergies"
                >
                  Allergies
                </Link>
              </li>
```

## CSS & JSX

```
style{{...,
  '&:hover': {
  color: 'orange',
}
}}
```

```
                <Link
                  className="tocolor--letter"
                  to="/commandes"
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    color: 'white',
                    '&:hover': {
                    color: 'orange',
                    }
                  }}>
```